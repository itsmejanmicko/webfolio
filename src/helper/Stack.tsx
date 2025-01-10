import { MagicCard } from "../components/ui/magic-card";


export default function Stack({Icon, title, descriptions}:{Icon: React.ElementType, title:string, descriptions:string}) {
  return (
   <MagicCard className="cursor-pointer  flex-col  whitespace-nowrap text-4xl shadow-2xl" gradientColor={"#D9D9D955"}>
     <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-l from-[#0EA5E9] to-transparent opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300" />
                  <div className="bg-[#1A1D26] rounded-2xl p-4 space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-xs text-gray-400">{title}</div>
                    </div>
                    <div className="text-sm text-white/60 pl-11">{descriptions}</div>
                  </div>
                </div>
   </MagicCard>
  
         
       
  )
}
