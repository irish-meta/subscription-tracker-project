<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Subscription;

class SubscriptionController extends Controller
{
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:20',
            'service_name' => 'required|string|max:255',
            'plan_type' => 'required|string|max:100',
            'price' => 'required|numeric',
            'billing_cycle' => 'required|string',
            'start_date' => 'required|date',
            'next_billing_date' => 'nullable|date',
            'status' => 'required|string',
        ]);

        Subscription::create($validated);

        return redirect()->route('dashboard')
            ->with('success', 'Subscription added successfully');
    }
}