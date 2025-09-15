import { ComponentMeta } from '../types'
import { GridPreview } from '../previews/grid'

export const gridEntry: ComponentMeta = {
    slug: 'grid',
    name: 'Grid',
    category: 'Layout',
    description: '12-column grid system with Row and Col components.',
    Preview: GridPreview,
    code: {
      react: `import { Row, Col } from 'maxzilla-ui-react'

<Row>
  <Col span={6}>Column 1</Col>
  <Col span={6}>Column 2</Col>
</Row>

<Row>
  <Col span={4}>Sidebar</Col>
  <Col span={8}>Main content</Col>
</Row>`,
      html: `<mz-row>
  <mz-col span="6">Column 1</mz-col>
  <mz-col span="6">Column 2</mz-col>
</mz-row>

<mz-row>
  <mz-col span="4">Sidebar</mz-col>
  <mz-col span="8">Main content</mz-col>
</mz-row>`
    }
  }
