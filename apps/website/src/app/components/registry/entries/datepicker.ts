import { ComponentMeta } from '../types'
import { DatePickerBasicPreview } from '../previews/datepicker'

export const datepickerEntry: ComponentMeta = {
    slug: 'datepicker',
    name: 'Date Picker',
    category: 'Forms',
    description: 'Calendar-based date selection input.',
    Preview: DatePickerBasicPreview,
    code: {
      react: `import { DatePicker, Card, Alert } from 'maxzilla-ui-react'
import { Calendar, Info } from 'lucide-react'

<Card elevation="sm">
  <h4 className="font-semibold mb-4">Schedule Event</h4>
  <div className="space-y-4">
    <div className="grid sm:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium mb-2">
          <Calendar className="w-4 h-4 inline mr-1" />
          Start Date
        </label>
        <DatePicker />
      </div>
      <div>
        <label className="block text-sm font-medium mb-2">
          <Calendar className="w-4 h-4 inline mr-1" />
          End Date
        </label>
        <DatePicker />
      </div>
    </div>
    <Alert variant="info">
      <div className="flex items-center gap-2">
        <Info className="w-4 h-4" />
        <span>Event duration will be calculated automatically</span>
      </div>
    </Alert>
  </div>
</Card>`,
      html: `<mz-date-picker></mz-date-picker>

<label>Appointment Date</label>
<mz-date-picker></mz-date-picker>`
    }
  }
