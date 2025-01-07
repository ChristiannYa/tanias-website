const Response = () => {
  return (
    <details className="blur-3 py-3 px-5 rounded-sm overflow-hidden">
      <summary className="font-ff-3 text-xl text-acc-3">
        Message sent successfully!
      </summary>
      <div className="mt-1">
        <div className="flex gap-x-1">
          <h1 className="font-ff-3 text-fc-3 text-xl">Name</h1>
          <p className="font-ff-3 text-slate-400 text-lg">Christian</p>
        </div>
        
        <div className="flex gap-x-1">
          <h1 className="font-ff-3 text-fc-3 text-xl">Email</h1>
          <p className="font-ff-3 text-slate-400 text-lg">chris@gmail.com</p>
        </div>
        
        <div className="flex gap-x-1">
          <h1 className="font-ff-3 text-fc-3 text-xl">Phone</h1>
          <p className="font-ff-3 text-slate-400 text-lg">713 875 3607</p>
        </div>
        
        <div className="flex gap-x-1">
          <h1 className="font-ff-3 text-fc-3 text-xl">Subject</h1>
          <p className="font-ff-3 text-slate-400 text-lg">Testing the form</p>
        </div>
        
        <div className="flex gap-x-1">
          <h1 className="font-ff-3 text-fc-3 text-xl">Referral</h1>
          <p className="font-ff-3 text-slate-400 text-lg">Friend</p>
        </div>
        
        <div className="flex gap-x-1">
          <h1 className="font-ff-3 text-fc-3 text-xl">Service needed</h1>
          <p className="font-ff-3 text-slate-400 text-lg">
            Videography - Photography
          </p>
        </div>

        <div className="flex gap-x-1">
          <h1 className="font-ff-3 text-fc-3 text-xl">Message</h1>
          <p className="font-ff-3 text-slate-400 text-lg">
            When is the soonest day you are available?
          </p>
        </div>
      </div>
    </details>
  );
};

export default Response;
