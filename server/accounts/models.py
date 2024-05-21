from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser, PermissionsMixin
from django.utils import timezone

# Custom user manager for account behaviors
class CustomUserManager(BaseUserManager):
    def create_user(self, email, password, username, first_name, last_name):
        try:
            if not email or not password:
                raise ValueError("Please provide both email and password to register a new user.")
        
            user = self.model(
                email = self.normalize_email(email),
                username = username,
                first_name = first_name,
                last_name = last_name,
            )
            user.set_password(password)
            user.save(using=self._db)
            return user
        except ValueError as e:
            raise ValueError(str(e))
    
    def create_superuser(self, email, password, username):
        try:
            if not email or not password:
                raise ValueError("Please provide both email and password to register a new user.")
        
            user = self.model(
                email = self.normalize_email(email),
                username = username,
                is_active = True,
                is_staff = True,
                is_superuser = True,
            )
            user.set_password(password)
            user.save(using=self._db)
            return user
        except ValueError as e:
            raise ValueError(str(e))

# User account schema design
class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(verbose_name="Email", unique=True, blank=False, null=False)
    first_name = models.CharField(verbose_name="First name", blank=True, null=False, default='', max_length=255)
    last_name = models.CharField(verbose_name="Last name", blank=True, null=False, default='', max_length=255)
    username = models.CharField(verbose_name="Username", unique=True, blank=False, null=False, max_length=255)
    avatar = models.FileField(null=True)
    avatar_data = models.BinaryField(null=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)
    is_admin = models.BooleanField(default=False)

    date_joined = models.DateTimeField(default=timezone.now)
    last_login = models.DateTimeField(blank=True, null=True, auto_now=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    EMAIL_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

    class Meta:
        verbose_name = 'User'
        verbose_name_plural = 'Users'

    def get_full_name(self):
        return f"{self.first_name} {self.last_name}"
    
    def get_short_name(self):
        return self.username

    def has_perm(self, perm, obj=None):
        return self.is_admin

    def __str__(self):
        return self.username