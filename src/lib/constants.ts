import { IHeaderMenuItem } from "./interfaces"
import { Brush, Code2Icon, CloudLightning, Smartphone } from "lucide-react"

export const headerMenuItems: IHeaderMenuItem[] = [
    {
        label: 'About',
        link: 'about'
    },
    {
        label: 'Skills',
        link: 'skills'
    },
    {
        label: 'Projects',
        link: 'projects'
    },
    {
        label: 'Contact',
        link: 'contact'
    }
]

export const features = [
    {
        icon: Brush,
        title: 'Modern UI Design',
        description: 'Creating beautiful, responsive interfaces that look great on any device using the latest design trends'
    },
    {
        icon: Code2Icon,
        title: 'Clean Code',
        description: 'Writing maintainable, efficient code using the latest JavaScript and TypeScript standards, ensuring high performance and scalability'
    },
    {
        icon: CloudLightning,
        title: 'Performance Optimization',
        description: 'Ensure fast load times and smooth interactions with optimized code and assets, enhancing user experience'
    },
    {
        icon: Smartphone,
        title: 'Responsive Development',
        description: 'Building applications that work seamlessly across all devices, from desktops to mobile phones, ensuring accessibility and usability for all users'
    }
]