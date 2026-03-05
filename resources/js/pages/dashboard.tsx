import { Head } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import type { BreadcrumbItem } from '@/types';
import AddSubscriptionForm from '@/components/AddSubscriptionForm'; // ✅ Import your new form

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard(),
    },
];

export default function Dashboard(props: any) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            {/* ✅ Add Subscription Form Component */}
            <AddSubscriptionForm />

            {/* ✅ Subscriptions Table */}
            <div className="bg-gray-800 rounded shadow-md p-4 text-white">
                <h2 className="text-xl font-bold mb-4 text-white">Subscriptions</h2>
                <table className="w-full border-collapse text-white">
                    <thead>
                        <tr className="bg-gray-700">
                            <th className="border px-4 py-2">Full Name</th>
                            <th className="border px-4 py-2">Service</th>
                            <th className="border px-4 py-2">Price</th>
                            <th className="border px-4 py-2">Billing Cycle</th>
                            <th className="border px-4 py-2">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.subscriptions?.map((sub: any) => (
                            <tr key={sub.id}>
                                <td className="border px-4 py-2">{sub.full_name}</td>
                                <td className="border px-4 py-2">{sub.service_name}</td>
                                <td className="border px-4 py-2">{sub.price}</td>
                                <td className="border px-4 py-2">{sub.billing_cycle}</td>
                                <td className="border px-4 py-2">{sub.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppLayout>
    );
}