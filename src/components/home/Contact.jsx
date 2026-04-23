import Section from '../common/Section';
import Button from '../common/Button';
import {FaGithub, FaLinkedin} from 'react-icons/fa';

const Contact = () => {
 
    const contactInfo = [
        {  label: 'Phone', value: '0312-7225104' },
        {  label: 'Email', value: 'Affanamin082@gmail.com' },
    ];

    const socialLinks = [
        { icon: FaGithub, url: "https://github.com/affan082" },
        { icon: FaLinkedin, url: "https://linkedin.com/in/affan-amin-823189383" }
    ];

    return (
        <Section id="contact" title="Let's Connect">
            <div className="max-w-2xl mx-auto text-center">
             <div className="space-y-8">
                <p className="text-gray-400 mb-3">
                    I&apos;m currently open to new opportunities and collaborations.
                        Feel free to reach out!
                </p>
                <div className="space-y-4">
                {contactInfo.map((item, idx) => (
                    <div key={idx} className="flex flex-row items-center justify-center gap-4">
                        <div>
                            <h4 className="text-sm text-gray-500 uppercase tracking-wider">{item.label}</h4>
                            <p className="text-white font-medium">{item.value}</p>
                        </div>
                    </div>
                ))}                       
                </div>
                <div className="flex justify-center gap-6 mb-3">
                {socialLinks.map((item, idx) =>{
                    const Icon =item.icon;
                    return (
                <a 
                 key={idx}
                 href={item.url}
                 rel="noopener noreferrer"
                 target='_blank'
                 className="text-gray-400 hover:text-primary transition-all duration-300 transform hover:scale-125 text-xl"
                 >
                    <Icon size={30} />
                </a>
                );})}
                </div>
             </div>              
            </div>
        </Section>
    );
};

export default Contact;
