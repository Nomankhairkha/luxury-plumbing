export default function Stats() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-500">15+</h3>
            <p className="text-slate-300 mt-2">Years Experience</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-500">5000+</h3>
            <p className="text-slate-300 mt-2">Projects Completed</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-500">24/7</h3>
            <p className="text-slate-300 mt-2">Emergency Support</p>
          </div>

          <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-500">4.9★</h3>
            <p className="text-slate-300 mt-2">Customer Rating</p>
          </div>

        </div>

      </div>
    </section>
  );
}