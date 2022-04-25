function App() {
  return (
    <div>
      <header className="fixed flex justify-center py-2 w-full z-4 bg-dp-4">
        <span className="font-bold text-lg text-primary">tempest</span>
      </header>
  
      <main className="flex flex-col h-screen justify-center">
        <section className="flex flex-col h-2/3 items-center justify-between py-16">
          <span className="text-3xl">Location</span>

          <div className="flex flex-col items-center gap-y-2">
            {/* <span className="font-bold text-8xl text-primary">{ weatherData.current.temp.toString().slice(0, 2) }°</span>
            <span className="text-sm">Feels like { weatherData.current.feels_like.toString().slice(0, 2) }°</span> */}
            <span className="font-bold text-8xl text-primary">69°</span>
            <span className="text-sm">Feels like 420°</span>
          </div>

          <div className="flex flex-col items-center gap-y-2">
            <span className="text-3xl text-primary">Weather</span>
            <span className="text-sm">description</span>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
