# accounts/views.py
from rest_framework import status, permissions
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.decorators import api_view
from rest_framework.decorators import permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .serializers import UserSerializer, CustomTokenObtainPairSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken, AccessToken
from .models import User
from datetime import timedelta

@permission_classes(permissions.AllowAny,)
class SignupAPIView(APIView):
    def post(self, request):
        data = self.request.data
        serializer = UserSerializer(data=request.data)

        username = data['username']
        password = data['password']
        firstName = data['firstName']
        lastName = data['lastName']
        re_password = data['re_password']

        if password != re_password:
            return Response({'error': 'Password does not match!'}, status=status.HTTP_400_BAD_REQUEST)
        else: 
            return 


    
class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Add custom claims
        token['user_id'] = str(user.id)
        return token

class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        user = serializer.user
        refresh = RefreshToken.for_user(user)
        access = refresh.access_token

        # Customize the expiration time of the access token
        access.set_exp(lifetime=timedelta(minutes=30))  # Set expiration time to 30 minutes

        return Response({
            'refresh_token': str(refresh),
            'access_token': str(access),
            'user_id': str(user.id),
            'access_expires': access['exp'],  # Add expiration time to response
        }, status=status.HTTP_200_OK)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def getUserData(request, id):
    try:
        user = User.objects.get(pk=id)
        user_data = {
            'username': user.username,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name,
        }
        return Response(user_data, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)