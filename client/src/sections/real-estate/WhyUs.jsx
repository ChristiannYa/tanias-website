import { whyUs } from "../../constants"

const WhyUs = () => {
  return (
    <section className="w-[92%] mx-auto">
      <h1 className="page-sub-subheading text-acc-2">
        why choose us?
      </h1>
      <div className="grid-300gr mt-8">
        {whyUs.map(label => (
          <div key={label.id} className="text-center">
            <div>
              <h3 className="package-title">
                {label.title}
              </h3>
            </div>
            <div>
              <p className="small-text">
                {label.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyUs