// import { update } from '../../../api/image'
import { update } from '../../../api/product'
import AdminHeader from '../../../components/Header/Admin'
import Sidebar from '../../../components/Sidebar'
import { getProductsid } from '../../../api/product'
import Product from "../../../model/product"
const EditProductPage = {
    render: async (id) => {
        console.log(id)
        const res = await getProductsid(id)
        const data: Product[] = res.data
        console.log(res)
        return /*html*/`
        ${AdminHeader.render()}
        <div class="flex mt-4 divide-x">
            <div class="w-[250px] flex-none">
                ${Sidebar.render()}
            </div>
            <form id="formEdit">
			<div class="grow">
                <h3>Thêm mới sản phẩm</h3>
                <div class="grid grid-cols-3 gap-8">
                <div class="">
                    <div class="flex flex-col justify-center items-center border rounded-md h-[250px]">
                    <label htmlFor="">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-10 w-10" viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                            clip-rule="evenodd" />
                        </svg>
                        <input id="input-file" type="file" class="hidden" accept="image/jpg, image/jpeg, image/png" />
                    </label>

                    <div class="mt-4">Thêm ảnh</div>
                    <img id="preview-image" />
                    </div>
                    <label for="">Mô tả ngắn</label>
                    <textarea class="w-full border"></textarea>
                </div>
				
                <div class="col-span-2">
                    <div>Thông tin sản phẩm</div>
                    <div class="flex flex-col mt-4">
                    <label for="">Tên sản phẩm:</label>
                    <input id="name" value="${data.name}" type="text" placeholder="Tên sản phẩm" class="w-full border rounded-sm h-10">
                    </div>
                    <div class="grid grid-cols-2 gap-4 mt-4">
                    <div class="flex flex-col">
                        <label for="">Giá gốc:</label>
                        <input id="originalPrice"  value="${data.originalPrice}"type="text" placeholder="Giá gốc" class="w-full border rounded-sm h-10">
                    </div>
                    <div class="flex flex-col">
                        <label for="">Giá khuyến mãi:</label>
                        <input type="text" value="đang xây dựng" placeholder="Giá khuyến mãi" class="w-full border rounded-sm h-10">
                    </div>
                    </div>
                </div>
                <button class="border rounded-md" id="edit-file">cập nhập sản phẩm </button>
                </div>
            </div>
            </form>
            
        </div>
        `
    },
    afterRender: async (id) => {
        // const editFile = document.querySelector('#edit-file')
        // const editImage = document.querySelector('#edit-image')

        // editFile?.addEventListener('change', (event) => {
        //     const file = event.target.files[0]
        //     const reader = new FileReader()
        //     reader.readAsDataURL(file)
        //     reader.onloadend = async () => {
        //         const res = await update(reader.result)
        //         console.log(res)
        //         const data = res.data
        //         editImage.src = data.url
        //     }
        // })
        const formEdit = document.querySelector('#formEdit');
        formEdit.addEventListener('submit', function (e) {
            e.preventDefault();

            const post = {
                id: id,
                name: document.querySelector('#name').value,
                originalPrice: document.querySelector("#originalPrice").value

            };
            // call api
            update(post);
            // window.location.href = '/admin';
        });
    }
}

export default EditProductPage;