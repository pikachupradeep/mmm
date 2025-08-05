import ButtonBg from "../button/ButtonBg"
import { Button } from "../ui/button"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import { Textarea } from "../ui/textarea"


const ContactForm = () => {
  return (
    <div>
        <form className="mt-6" action="">
            <div className="mb-4">
            <Label className="text-[1.2rem] md:text-[1.4rem] mb-4" htmlFor="name">First Name</Label>
            <Input
            id="name"
            name="name"
            type="text"
            required
            className="p-6"
            placeholder="John"
            />
            </div>

             <div className="mb-4">
            <Label className="text-[1.2rem] md:text-[1.4rem] mb-4" htmlFor="name">Last Name</Label>
            <Input
            id="name"
            name="name"
            type="text"
            required
            className="p-6"
            placeholder="Doe"
            />
            </div>

             <div className="mb-4">
            <Label className="text-[1.2rem] md:text-[1.4rem] mb-4" htmlFor="name">Email</Label>
            <Input
            id="name"
            name="name"
            type="email"
            required
            className="p-6"
            placeholder="john.example.com"
            />
            </div>

            <div className="mb-4">
            <Label className="text-[1.2rem] md:text-[1.4rem] mb-4" htmlFor="name">Message</Label>
            <Textarea
            id="name"
            name="name"
            typeof="text"
            required
            className="p-6 min-h-[10vh]"
            placeholder="Hi, I want to know.."
            />
            </div>

            <Button className="bg-blue-700 py-6 px-6 rounded-full text-[1.2rem] md:text-[1.3rem] md:py-7 cursor-pointer">Send Message</Button>
           
        </form>
    </div>
  )
}

export default ContactForm