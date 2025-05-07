export async function generateMetadata({ params }) {
    const { name } = await params;
  
    return {
      title: `${name} | AI Recipe`,
      description: `วิธีทำ ${name} แบบละเอียด พร้อมวัตถุดิบและขั้นตอนการทำ`
    };
  }
  
  export default function RecipeLayout({ children }) {
    return children;
  }
  