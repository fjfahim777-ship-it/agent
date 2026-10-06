const Loading = () => {
    return (
        <main className="bg-black min-h-screen flex items-center justify-center">
            <button className="btn bg-zinc-900 text-white border-zinc-800">
                <span className="loading loading-spinner"></span>
                Loading workouts…
            </button>
        </main>
    );
};

export default Loading;