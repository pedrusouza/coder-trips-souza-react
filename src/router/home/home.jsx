import { Categories } from "../../components/categories/categories"

const categories = [
  {
    "id": 1,
    "title": "Miami",
    "imageUrl": "https://i.ibb.co/QcFBByh/miami.jpg"
  },
  {
    "id": 2,
    "title": "Islândia",
    "imageUrl": "https://i.ibb.co/YLRLRFr/islandia.jpg"
  },
  {
    "id": 3,
    "title": "Sydney",
    "imageUrl": "https://i.ibb.co/ZB25Smd/sydney.jpg"
  },
  {
    "id": 4,
    "title": "Japão",
    "imageUrl": "https://i.ibb.co/kqn1913/japao.jpg"
  },

]

export function Home() {
  return (
    <div>
      <Categories categories={categories} />
    </div>
  )
}