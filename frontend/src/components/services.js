import { services } from "../assets/data/servicesdata";

const Services = () => {
    return (
        <div className="flex justify-between mt-8 p-8 gap-2 flex-wrap">
            {services.map((service) => (
                <div key={service.id} className="max-sm:w-full border-2 p-3">
                    <h2 className="flex items-center gap-2">{service.icon} <span className="font-bold">{service.service}</span></h2>
                    <span className="text-gray-500 text-sm">{service.desc}</span>
                </div>
            ))}
        </div>
    );
}

export default Services;