# task-manager
 1. Clone the repository
 2. Make sure to configure your .env file with correct database credentials and any other necessary environment variables.
3. Run the database migrations to create the necessary tables
    php artisan migrate
4. For Vite (Frontend):
    npm run dev    
    php artisan serve(backend)
    This will start the Laravel backend server and the Vite development server.
 5. Use a tool like Postman to send HTTP requests to the API endpoints
    GET:(http://127.0.0.1:8000/api/tasks/upcoming)
    POST:(http://127.0.0.1:8000/api/tasks)   