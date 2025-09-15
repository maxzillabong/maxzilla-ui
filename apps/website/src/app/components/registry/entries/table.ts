import { ComponentMeta } from '../types'
import { TableBasicPreview } from '../previews/table'

export const tableEntry: ComponentMeta = {
    slug: 'table',
    name: 'Table',
    category: 'Data Display',
    description: 'Semantic table with rich data presentation.',
    Preview: TableBasicPreview,
    code: {
      react: `import { Table, Avatar, Badge, Button, Progress } from 'maxzilla-ui-react'
import { Eye, Settings } from 'lucide-react'

<Table>
  <th slot="header">User</th>
  <th slot="header">Role</th>
  <th slot="header">Status</th>
  <th slot="header">Actions</th>

  <tr>
    <td>
      <div className="flex items-center gap-3">
        <Avatar src="https://i.pravatar.cc/32?img=1" size="sm" status="online" />
        <div>
          <p className="font-medium">Sarah Chen</p>
          <p className="text-sm text-neutral-500">sarah@example.com</p>
        </div>
      </div>
    </td>
    <td><Badge variant="primary">Admin</Badge></td>
    <td><Badge variant="success">Active</Badge></td>
    <td>
      <div className="flex gap-1">
        <Button variant="ghost" size="sm">
          <Eye className="w-3 h-3" />
        </Button>
        <Button variant="ghost" size="sm">
          <Settings className="w-3 h-3" />
        </Button>
      </div>
    </td>
  </tr>
</Table>`,
      html: `<mz-table>
  <th slot="header">Name</th>
  <th slot="header">Role</th>
  <tr><td>Ada</td><td>Engineer</td></tr>
  <tr><td>Linus</td><td>Maintainer</td></tr>
</mz-table>`
    }
  }
