interface Skill {
    name: string;
    description: string;
    icon: React.ReactNode;
}
export const skillsData: Skill[] = [
    {
        name: "HTML5",
        description: "Estructura semántica y accesible para la web moderna.",
        icon: <i className="fab fa-html5 text-5xl text-orange-500"></i>,
    },
    {
        name: "CSS3",
        description: "Estilizado avanzado y animaciones fluidas.",
        icon: <i className="fab fa-css3-alt text-5xl text-blue-500"></i>,
    },
    {
        name: "JavaScript",
        description: "Interactividad y lógica del lado del cliente.",
        icon: <i className="fab fa-js text-5xl text-yellow-400"></i>,
    },
    {
        name: "React",
        description: "Framework de JavaScript para construir interfaces de usuario.",
        icon: <i className="fab fa-react text-5xl text-blue-400"></i>,
    },
    {
        name: "TypeScript",
        description: "Superset de JavaScript que añade tipado estático.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="55" height="55">
            <path fill="#fff" d="M22.67 47h99.67v73.67H22.67z" />
            <path data-name="original" fill="#007acc"
                d="M1.5 63.91v62.5h125v-125H1.5zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1 23 23 0 01-12.72-6.63c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73L82 101l3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H56.66v46.23H45.15V69.26H28.88v-5a49.19 49.19 0 01.12-5.17C29.08 59 39 59 51 59h21.83z" />
        </svg>,
    },
    {
        name: "Alpine JS",
        description: "Framework minimalista para JavaScript.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="55" height="55">
            <path fill="#77c1d2" fillRule="evenodd"
                d="M98.444 35.562 126 62.997 98.444 90.432 70.889 62.997z"
                clipRule="evenodd" />
            <path fill="#2d3441" fillRule="evenodd"
                d="m29.556 35.562 57.126 56.876H31.571L2 62.997z" clipRule="evenodd" />
        </svg>,
    },
    {
        name: "Tailwind CSS",
        description: "Framework CSS utility-first para diseños rápidos.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="55" height="55">
                <path
                    d="M64.004 25.602c-17.067 0-27.73 8.53-32 25.597 6.398-8.531 13.867-11.73 22.398-9.597 4.871 1.214 8.352 4.746 12.207 8.66C72.883 56.629 80.145 64 96.004 64c17.066 0 27.73-8.531 32-25.602-6.399 8.536-13.867 11.735-22.399 9.602-4.87-1.215-8.347-4.746-12.207-8.66-6.27-6.367-13.53-13.738-29.394-13.738zM32.004 64c-17.066 0-27.73 8.531-32 25.602C6.402 81.066 13.87 77.867 22.402 80c4.871 1.215 8.352 4.746 12.207 8.66 6.274 6.367 13.536 13.738 29.395 13.738 17.066 0 27.73-8.53 32-25.597-6.399 8.531-13.867 11.73-22.399 9.597-4.87-1.214-8.347-4.746-12.207-8.66C55.128 71.371 47.868 64 32.004 64zm0 0"
                    fill="#38bdf8"
                />
            </svg>
        ),
    },
    {
        name: "SASS",
        description: "Preprocesador CSS con variables y anidación.",
        icon: <i className="fab fa-sass text-5xl text-pink-500"></i>,
    },
    {
        name: "PHP",
        description: "Lenguaje de programación del lado del servidor.",
        icon: <i className="fab fa-php text-5xl text-indigo-500"></i>,
    },
    {
        name: "MySQL",
        description: "Sistema de gestión de bases de datos relacional.",
        icon: <i className="fas fa-database text-5xl text-blue-300"></i>,
    },
    {
        name: "Laravel",
        description: "Framework PHP elegante y expresivo.",
        icon: <i className="fab fa-laravel text-5xl text-red-500"></i>,
    },
    {
        name: "Livewire",
        description: "Full-stack framework para Laravel.",
        icon:
            <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 128 128">
                <path style={{ fillRule: "evenodd", fill: "#fb70a9", fillOpacity: 1 }}
                    d="M108.566 83.547c-1.937 2.926-3.406 6.527-7.34 6.527-6.624 0-6.98-10.203-13.609-10.203-6.625 0-6.265 10.203-12.887 10.203-6.625 0-6.98-10.203-13.609-10.203-6.625 0-6.266 10.203-12.887 10.203-6.625 0-6.98-10.203-13.605-10.203-6.629 0-6.27 10.203-12.89 10.203-2.083 0-3.544-1.008-4.778-2.39-4.738-8.239-7.465-17.895-7.465-28.22 0-30.222 23.367-54.722 52.191-54.722 28.825 0 52.192 24.5 52.192 54.723 0 8.64-1.91 16.816-5.313 24.082Zm0 0" />
                <path style={{ fillRule: "evenodd", fill: "#4e56a6", fillOpacity: 1 }}
                    d="M40.844 78.145v22.668c0 4.066-3.301 7.363-7.371 7.363a7.365 7.365 0 0 1-7.371-7.364V73.45c1.375-2.523 2.945-4.707 5.78-4.707 4.61 0 6.223 5.79 8.962 9.403Zm27.843 1.183v35.844a8.185 8.185 0 0 1-8.187 8.183c-4.523 0-8.191-3.664-8.191-8.183v-40.57c1.543-2.973 3.132-5.86 6.39-5.86 5.16 0 6.563 7.242 9.989 10.586Zm26.211-.66v26.023c0 4.067-3.3 7.364-7.37 7.364-4.071 0-7.372-3.297-7.372-7.364V72.707c1.281-2.195 2.809-3.965 5.364-3.965 4.84 0 6.375 6.38 9.378 9.926Zm0 0" />
                <path style={{ fillRule: "evenodd", fill: "#000", fillOpacity: .298039 }}
                    d="M40.844 85.094c-1.309-1.602-2.856-2.79-5.094-2.79-5.316 0-6.293 6.696-9.648 9.712V63.145a7.365 7.365 0 0 1 7.37-7.364c4.071 0 7.372 3.297 7.372 7.364Zm27.843.515c-1.394-1.855-3.023-3.304-5.496-3.304-5.914 0-6.457 8.285-10.882 10.578v-12.77c0-4.52 3.668-8.183 8.191-8.183a8.185 8.185 0 0 1 8.188 8.183Zm26.211-1.433c-1.136-1.117-2.48-1.871-4.265-1.871-5.73 0-6.418 7.777-10.477 10.343V66.734a7.371 7.371 0 0 1 14.742 0Zm0 0" />
                <path style={{ fillRule: "evenodd", fill: "#fb70a9", fillOpacity: 1 }}
                    d="M108.566 83.547c-1.937 2.926-3.406 6.527-7.34 6.527-6.624 0-6.98-10.203-13.609-10.203-6.625 0-6.265 10.203-12.887 10.203-6.625 0-6.98-10.203-13.609-10.203-6.625 0-6.266 10.203-12.887 10.203-6.625 0-6.98-10.203-13.605-10.203-6.629 0-6.27 10.203-12.89 10.203-2.083 0-3.544-1.008-4.778-2.39-4.738-8.239-7.465-17.895-7.465-28.22 0-30.222 23.367-54.722 52.191-54.722 28.825 0 52.192 24.5 52.192 54.723 0 8.64-1.91 16.816-5.313 24.082Zm0 0" />
                <path style={{ fillRule: "evenodd", fill: "#e24ca6", fillOpacity: 1 }}
                    d="M97.273 88.984c13.676-20.332 14.028-42.879 1.059-67.652 9.613 9.844 15.547 23.348 15.547 38.25 0 8.61-1.98 16.75-5.508 23.992-2.004 2.91-3.531 6.5-7.61 6.5a5.947 5.947 0 0 1-3.488-1.09Zm0 0" />
                <path style={{ fillRule: "evenodd", fill: "#fff", fillOpacity: 1 }}
                    d="M58.89 73.117c18.15 0 25.79-10.52 25.79-25.46 0-14.942-11.547-28.692-25.79-28.692-14.245 0-25.792 13.75-25.792 28.691 0 14.942 7.64 25.461 25.793 25.461Zm0 0" />
                <path style={{ fillRule: "evenodd", fill: "#030776", fillOpacity: 1 }}
                    d="M61.625 37.836c0 5.89-4.332 10.668-9.672 10.668-5.344 0-9.672-4.777-9.672-10.668 0-5.89 4.328-10.668 9.672-10.668 5.34 0 9.672 4.777 9.672 10.668Zm0 0" />
                <path style={{ fillRule: "evenodd", fill: "#fff", fillOpacity: 1 }}
                    d="M55.176 35.375c0 2.719-2.164 4.922-4.836 4.922s-4.836-2.203-4.836-4.922 2.164-4.922 4.836-4.922 4.836 2.203 4.836 4.922Zm0 0" />
            </svg>,
    },
    {
        name: "Git",
        description: "Control de versiones distribuido.",
        icon: <i className="fab fa-git-alt text-5xl text-orange-600"></i>,
    },
]