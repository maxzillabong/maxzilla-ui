"use client"
import React from 'react'
import { Badge, Card, Radio, RadioGroup } from 'maxzilla-ui-react'

export const RadioBasicPreview: React.FC = () => (
  <div className="space-y-4">
    {/* Basic Options */}
    <div>
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Select your plan</h4>
      <RadioGroup name="plan" className="space-y-2">
        <Radio value="basic" className="p-3 border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Basic</p>
              <p className="text-sm text-neutral-500">Free forever</p>
            </div>
            <Badge variant="secondary">$0</Badge>
          </div>
        </Radio>
        <Radio value="pro" className="p-3 border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Pro</p>
              <p className="text-sm text-neutral-500">Perfect for professionals</p>
            </div>
            <Badge variant="primary">$29/mo</Badge>
          </div>
        </Radio>
        <Radio value="enterprise" className="p-3 border rounded-lg hover:bg-neutral-50 dark:hover:bg-neutral-800 cursor-pointer">
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="font-medium text-neutral-900 dark:text-white">Enterprise</p>
              <p className="text-sm text-neutral-500">For large teams</p>
            </div>
            <Badge variant="success">Custom</Badge>
          </div>
        </Radio>
      </RadioGroup>
    </div>

    {/* Payment Method */}
    <Card elevation="sm">
      <h4 className="font-semibold text-neutral-900 dark:text-white mb-3">Payment method</h4>
      <RadioGroup name="payment" className="space-y-3">
        <Radio value="card" className="flex items-center gap-3 p-2 cursor-pointer">
          <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            💳
          </div>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">Credit Card</p>
            <p className="text-sm text-neutral-500">Visa, Mastercard, etc.</p>
          </div>
        </Radio>
        <Radio value="paypal" className="flex items-center gap-3 p-2 cursor-pointer">
          <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            🏦
          </div>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">PayPal</p>
            <p className="text-sm text-neutral-500">Pay with your PayPal account</p>
          </div>
        </Radio>
        <Radio value="bank" className="flex items-center gap-3 p-2 cursor-pointer">
          <div className="w-8 h-8 rounded bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center">
            🏪
          </div>
          <div>
            <p className="font-medium text-neutral-900 dark:text-white">Bank Transfer</p>
            <p className="text-sm text-neutral-500">Direct bank transfer</p>
          </div>
        </Radio>
      </RadioGroup>
    </Card>
  </div>
)