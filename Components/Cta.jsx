const Cta = () => {
  return (
    <section id="study-mode" className="c px-6 py-20 sm:py-24">
      <div className="mx-auto max-w-3xl text-center">

      
        <h2 className="text-3xl font-semibold leading-tight text-[var(--color-primary)] sm:text-4xl lg:text-5xl">
          Ready for your next study session?
        </h2>

    
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[var(--color-text-dark)] sm:text-lg">
          Create an account and start with the tutor mode that suits how you
          learn.
        </p>

    
        <button className="mt-8 rounded-lg bg-[var(--color-primary)] px-6 py-3.5 font-medium text-white transition-colors hover:bg-[var(--color-primary-hover)]">
          Create your free account
        </button>

      </div>
    </section>
  );
};

export default Cta;