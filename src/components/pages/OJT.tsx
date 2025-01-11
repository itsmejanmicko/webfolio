import { Card, CardContent } from "../ui/card";
import { motion } from 'framer-motion';
import switchImage from '../../utils/assets/image/switch.jpg';
import router from '../../utils/assets/image/ojt.jpg';

export default function OJT() {
  return (
    <section className="py-12 px-4 max-w-5xl mx-auto font-fira">
      <div className="text-center mb-12">
        <h2 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">Experience</h2>
        <p className="text-muted-foreground text-xl mt-4">My previous OJT experience at IMVI Philippines.</p>
      </div>

      <div className="grid gap-6">
        {/* Network Engineer Card with Motion */}
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="group transition-all duration-300 hover:scale-105 border-[#64ffda]">
            <CardContent className="flex flex-col sm:flex-row gap-6 p-6 bg-bg">
              <div className="flex-shrink-0 flex justify-center mb-4 sm:mb-0">
                <img
                  src={switchImage}
                  alt="Network Engineer at IMVI"
                  className="rounded w-32 h-32 object-cover"  // Adjust the size as needed
                />
              </div>
              <div className="flex-grow  text-white">
                <h3 className="font-bold text-2xl mb-2 text-[#64ffda]">Network Engineer</h3>
                <p className="text-muted-foreground mb-2 text-lg">International Micro Village Inc.</p>
                <p className="text-sm text-muted-foreground mb-3">April 2023 - August 2023</p>
                <p className="text-lg leading-relaxed text-white">
                  Configured network equipment such as <span className="font-medium">Cisco</span> and{" "}
                  <span className="font-medium">Linksys</span>, assisting employees in setting up and configuring{" "}
                  <span className="font-medium">products</span> and directing them to{" "}
                  <span className="font-medium">clients</span>.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Onsite Product Distributor Card with Motion */}
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="group transition-all duration-300 hover:scale-105 border-[#64ffda]">
            <CardContent className="flex flex-col sm:flex-row gap-6 p-6 bg-bg">
              <div className="flex-shrink-0 flex justify-center mb-4 sm:mb-0  text-white">
                <img
                  src={router}
                  alt="Onsite Product Distribution"
                  className="rounded w-32 h-32 object-cover"  // Adjust the size as needed
                />
              </div>
              <div className="flex-grow">
                <h3 className="font-bold text-2xl mb-2 text-[#64ffda]">Onsite Product Distribution</h3>
                <p className="text-muted-foreground mb-2 text-lg">Converge Ph</p>
                <p className="text-sm text-muted-foreground mb-3">March 2023</p>
                <p className="text-lg leading-relaxed">
                  Managed onsite product distribution at specific client locations, including{" "}
                  <span className="font-medium">Converge Ph</span>, ensuring timely delivery and setup of all products.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
