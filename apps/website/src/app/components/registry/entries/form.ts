import { ComponentMeta } from '../types'
import { FormBasicPreview } from '../previews/form'

export const formEntry: ComponentMeta = {
    slug: 'form',
    name: 'Form',
    category: 'Forms',
    description: 'Form container with comprehensive field types.',
    Preview: FormBasicPreview,
    code: {
      react: `import { Form, FormGroup, FormActions, Input, Textarea, RadioGroup, Radio, Checkbox, Button } from 'maxzilla-ui-react'
import { Send, Mail } from 'lucide-react'

<Form>
  <FormGroup>
    <div className="grid sm:grid-cols-2 gap-4">
      <Input label="First Name" placeholder="John" required />
      <Input label="Last Name" placeholder="Doe" required />
    </div>
    <Input label="Email Address" type="email" placeholder="john@example.com" required />
  </FormGroup>

  <FormGroup>
    <Textarea
      label="Message"
      placeholder="Tell us about your project..."
      rows={4}
      helperText="Please provide as much detail as possible"
    />
  </FormGroup>

  <FormGroup>
    <RadioGroup name="contact-method">
      <Radio value="email" className="flex items-center gap-2">
        <Mail className="w-4 h-4" />
        Email
      </Radio>
      <Radio value="phone" className="flex items-center gap-2">
        📞 Phone
      </Radio>
    </RadioGroup>
  </FormGroup>

  <FormActions>
    <Button variant="outline" type="reset">Clear Form</Button>
    <Button variant="primary" type="submit">
      <Send className="w-4 h-4 mr-2" />
      Send Message
    </Button>
  </FormActions>
</Form>`,
      html: `<mz-form>
  <mz-form-group>
    <mz-input label="First Name"></mz-input>
    <mz-input label="Last Name"></mz-input>
  </mz-form-group>
  <mz-form-actions>
    <mz-button type="reset">Reset</mz-button>
    <mz-button variant="primary" type="submit">Submit</mz-button>
  </mz-form-actions>
</mz-form>`
    }
  }
