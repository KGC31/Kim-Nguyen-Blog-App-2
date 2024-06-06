# Kim Nguyen Blog (version 2)
This version is an upgrade to the previous blog app that i created. It is a chance for me to implement my ReactJS, Django and Postgres skills, also to learn new framework that is NextJS. The website is quite like a project where i can show my skill, and it is also a note for the knowledge i gain on the way of becoming a developer, software engineer and a reseracher.
## Prerequisites

Before you begin, ensure you have the following installed:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- [Node.js and npm](https://nodejs.org/)
- [Python](https://www.python.org/) and [pip](https://pip.pypa.io/en/stable/installation/)
- [Virtualenv](https://virtualenv.pypa.io/en/stable/installation/)

## Installation
### Clone the Repository
1. Open your terminal or command prompt.
2. Clone the repository using Git:

    ```sh
    git clone https://github.com/yourusername/yourproject.git
    cd yourproject
    ```

### Set Up the Next.js client side

1. Navigate to the Next.js project directory:

    ```sh
    cd client
    ```

2. Install the required npm packages:

    ```sh
    npm install
    ```

3. Start the Next.js development server:

    ```sh
    npm run dev
    ```

The development server should now be running at [http://localhost:3000](http://localhost:3000).

You can find more information about setting up a NextJS in this [link](https://nextjs.org/docs)

### Set Up the Django server side

1. Navigate to the Django project directory:

    ```sh
    cd ../backend
    ```

2. Create a virtual environment:

    ```sh
    python -m venv venv
    ```

3. Activate the virtual environment:

    - On macOS/Linux:

        ```sh
        source venv/bin/activate
        ```

    - On Windows:

        ```sh
        venv\Scripts\activate
        ```

4. Install the required Python packages:

    ```sh
    pip install -r requirements.txt
    ```

5. Apply the database migrations:

    ```sh
    python manage.py migrate
    ```

6. Create a superuser (follow the prompts to set up a username, email, and password):

    ```sh
    python manage.py createsuperuser
    ```

7. Start the Django development server:

    ```sh
    python manage.py runserver
    ```

The development server should now be running at [http://localhost:8000](http://localhost:8000).

### Set up database with PostgreSQL and PgAdmin4

Step 1: Download and Install PostgreSQL

1. Visit the [PostgreSQL Downloads page](https://www.postgresql.org/download/windows/).
2. Download the PostgreSQL installer.
3. Run the installer and follow the setup wizard:
   - **Installation Directory**: Choose your installation directory.
   - **Select Components**: Select the components you want to install (default selection is recommended).
   - **Password**: Set the password for the PostgreSQL superuser (postgres).
   - **Port Number**: Choose the port number (default is 5432).
   - **Locale**: Select the locale (default locale is recommended).

4. Click "Next" and then "Finish" to complete the installation.

- Step 2: Verify PostgreSQL Installation

1. Open the command prompt and type:
    ```sh
    psql -U postgres
    ```
2. Enter the password you set during the installation.
3. You should now be connected to the PostgreSQL database.
4. To exit the PostgreSQL prompt, type:
    ```sh
    \q
    ```

Step 3: Download and Install PgAdmin4

1. Visit the [PgAdmin4 Downloads page](https://www.pgadmin.org/download/pgadmin-4-windows/).
2. Download the PgAdmin4 installer for Windows.
3. Run the installer and follow the setup wizard.

Step 4: Configure PgAdmin4

1. Open PgAdmin4 from the start menu.
2. Create a new server:
    - Right-click on "Servers" in the browser panel.
    - Select "Create" > "Server".
    - Fill in the connection details:
        - **Name**: Any name you prefer.
        - **Host**: `localhost`
        - **Port**: `5432`
        - **Username**: `postgres`
        - **Password**: Password you set during PostgreSQL installation.
    - Click "Save".


### Set up Notion database for blog

Create a Notion account and access [Notion intergration](https://www.notion.so/my-integrations). Choose new intergration and fill up the name of the intergration.
![image](https://github.com/KGC31/Kim-Nguyen-Blog-App-2/assets/114214103/5366944c-de09-4526-b2d0-4ad1361f7bc2)

After the basic information, here is the Notion secret key so that you can connect your app with the database.

Open the Notion app and create a new database in your workspace. Right click at the top right option menu and choose `Connect to`. Search for the name of the intergration that you have created and you're good to go.

![image](https://github.com/KGC31/Kim-Nguyen-Blog-App-2/assets/114214103/384cb036-1237-4442-86ad-4f78268ba3d3)

### Configure Environment Variables

In this project, we need to set an environment file for server side to connect with databases

Create a `.env` file in the `server` directory and add the required variables:

```env
PORT=8000
SECRET_KEY=<secret key>
NOTION_TOKEN=<notion token>
NOTION_DATABASE_ID=<your database id>
DB_PORT=5432
DB_NAME=<database name>
DB_USER=postgres
DB_PASSWORD=<your password>
DB_HOST=localhost
```
