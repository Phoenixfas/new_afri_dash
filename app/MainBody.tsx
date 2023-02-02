import Blogs_Subs from './Blogs_Subs'
import Regs from './Regs'

export default function MainBody() {
    
  return (
    <div className='flex flex-col gap-10'>
        <Blogs_Subs />
        <Regs />
    </div>
  )
}
