import './style.css'
import typescriptLogo from './typescript.svg'
import Navigo from 'navigo'
import AdminPage from './pages/Admin'
import HomePage from './pages/Home'
import AddProductPage from './pages/Admin/Product/add'
import EditProductPage from './pages/Admin/Product/edit'

const router = new Navigo('/', { linksSelector: "a" })

export type ComponentBase = {
  render: () => Promise<string>;
  afterRender?: () => void
}

const print = async (component: ComponentBase, id: any) => {
  console.log(id)
  document.getElementById('app').innerHTML = await component.render(id)
  if (component.afterRender) {
    component.afterRender(id)
  }
}

router.on({
  "/": () => {
    print(HomePage)
  },
  "/admin": () => {
    print(AdminPage)
  },
  "/admin/products/add": () => {
    print(AddProductPage)
  },
  "/admin/products/edit/:id": (ahi) => {
    const id = ahi.data.id
    console.log(id)
    print(EditProductPage, id)
  },
})
router.resolve()