from django.shortcuts import render, redirect

from .forms import UploadImageForm
from .models import ImageFile

# Create your views here.
def upload_file(request):
    if request.method == 'POST':
        form = UploadImageForm(request.POST, request.FILES)
        if form.is_valid():
            uploaded_img = form.save(commit=False)
            uploaded_img.image_data = form.cleaned_data['image'].file.read()
            uploaded_img.save()
            return redirect('/')
        else:
            form = UploadImageForm()
        return render(request, 'image_process/upload.html', {'form': form})