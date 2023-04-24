

# NextLMS

NextLMS is a Learning Management System designed to make the user experience of creating quizzes simple and fun. With the help of ChatGPT, quizzes can be created instantly. It is currently under development, with a focus on building out the architecture and components. 

## Features

- Simple and fun quiz creation
- Instant quiz creation with the help of ChatGPT
- Compatible with other Learning Management Systems
- Easy way to add your own motivational gamification
- Uses spaced repetition algorithms to keep students on target with learning objectives
- Built with NextJS as the main framework
- Unit tests are written with Jest

## Installation

To install NextLMS, follow these steps:

1. Clone the repository: `git clone https://github.com/username/NextLMS.git`
2. Install dependencies: `npm install`
3. Start the development server: `npm run dev`

## Installing and Updating Supabase

To install the Supabase client library for JavaScript in your project, use the following command:
`npm install supabase`

To update the Supabase schema and generate TypeScript types, you can use the `supabase` command-line interface (CLI). Here's the command to generate TypeScript types based on your Supabase schema:
`npx supabase gen types typescript --project-id "your-project-id" --schema public > lib/database.types.ts`

Replace "your-project-id" with the ID of your Supabase project. You can find this ID in the URL of your Supabase dashboard.

This command generates TypeScript types based on your Supabase schema and saves them to a file named `database.types.ts` in the `lib` directory of your project. Note that you may need to modify the generated TypeScript types to match your specific needs, as the generated types may not always be completely accurate or complete.

Make sure that your Supabase database is set up correctly and that you have the necessary permissions to access the schema before running this command.


## Usage

To use NextLMS, follow these steps:

1. Sign up for an account
2. Create a new quiz or select an existing one
3. Add your questions and answers
4. Choose your gamification options
5. Set your spaced repetition algorithm
6. Share the quiz with your students
    
## Contributing

We welcome contributions from the community! To contribute to NextLMS, follow these steps:

1. Fork the repository
2. Make your changes
3. Write unit tests
4. Submit a pull request

## License

NextLMS is licensed under the [Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International Public License](https://creativecommons.org/licenses/by-nc-nd/4.0/). This license prohibits the selling of the software without explicit permission from the owner. See [`LICENSE`](LICENSE.MD) for more information.
