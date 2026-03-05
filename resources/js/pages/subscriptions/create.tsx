import { useForm } from "@inertiajs/react";

export default function CreateSubscription() {
    const { data, setData, post, processing, errors } = useForm({
        full_name: "",
        email: "",
        phone: "",
        service_name: "",
        plan_type: "",
        price: "",
        billing_cycle: "",
        start_date: "",
        next_billing_date: "",
        status: "active",
    });

    function submit(e: React.FormEvent) {
        e.preventDefault();
        post("/subscriptions");
    }

    return (
        <div>
            <h1>Add Subscription</h1>

            <form onSubmit={submit}>
                <input
                    type="text"
                    placeholder="Full Name"
                    value={data.full_name}
                    onChange={(e) => setData("full_name", e.target.value)}
                />

                <input
                    type="email"
                    placeholder="Email"
                    value={data.email}
                    onChange={(e) => setData("email", e.target.value)}
                />

                <input
                    type="text"
                    placeholder="Service Name"
                    value={data.service_name}
                    onChange={(e) => setData("service_name", e.target.value)}
                />

                <input
                    type="number"
                    placeholder="Price"
                    value={data.price}
                    onChange={(e) => setData("price", e.target.value)}
                />

                <select
                    value={data.billing_cycle}
                    onChange={(e) => setData("billing_cycle", e.target.value)}
                >
                    <option value="">Billing Cycle</option>
                    <option value="monthly">Monthly</option>
                    <option value="yearly">Yearly</option>
                </select>

                <input
                    type="date"
                    value={data.start_date}
                    onChange={(e) => setData("start_date", e.target.value)}
                />

                <button disabled={processing}>
                    Submit
                </button>
            </form>
        </div>
    );
}