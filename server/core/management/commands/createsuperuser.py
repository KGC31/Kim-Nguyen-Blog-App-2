from django.contrib.auth.management.commands import createsuperuser
from django.core.management import CommandError

class Command(createsuperuser.Command):
    help = 'Create a superuser with an email'

    def add_arguments(self, parser):
        super().add_arguments(parser)
        parser.add_argument(
            '--email',
            dest='email',
            default=None,
            help='Specifies the email for the superuser',
        )

    def handle(self, *args, **options):
        email = options.get('email')
        if email:
            options['email'] = email
        else:
            # Prompt the user to enter the email if it's not provided
            email = input("Enter email: ")
            options['email'] = email
        
        super().handle(*args, **options)
