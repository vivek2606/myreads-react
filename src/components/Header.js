export default function Header({ appTitle }) {
    return (
        <div className="h-24 p-5 shadow-2xl text-center text-white font-bold text-4xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            {appTitle}
        </div>
    )
}