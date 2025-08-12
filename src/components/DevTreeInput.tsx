import { Switch } from '@headlessui/react'
import { classNames } from '../utils'
import { DevTreeLink } from "../types"

type DevTreeInputProps = {
    item: DevTreeLink
    handleUrlChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    handleEnableLink: (name: string) => void
}
export default function DevTreeInput({ item, handleUrlChange, handleEnableLink }: DevTreeInputProps) {
  return (
    <div className="bg-[#BCA88D] p-5 rounded-lg shadow-sm flex items-center  gap-3">
        <div 
            className="w-12 h-12 bg-cover"
            style={{ backgroundImage: `url('/social/icon_${item.name}.svg')` }}>

        </div>
        <input type="text" className="flex-1 border border-gray-100 rounded-lg px-3 py-2" 
                value={item.url}
                onChange={handleUrlChange}
                name={item.name}
                placeholder={`Link a tu ${item.name === 'x' ? 'X (Twitter)' : 
                            item.name === 'web' ? 'sitio web' :
                            item.name === 'linkedin' ? 'LinkedIn' :
                            item.name === 'youtube' ? 'YouTube' :
                            item.name === 'instagram' ? 'Instagram' :
                            item.name === 'facebook' ? 'Facebook' :
                            item.name === 'github' ? 'GitHub' :
                            item.name === 'tiktok' ? 'TikTok' :
                            item.name === 'twitch' ? 'Twitch' :
                            item.name}`}
        />

          <Switch
                checked={item.enabled}
                onChange={() => handleEnableLink(item.name)}
                className={classNames(
                    item.enabled ? 'bg-[#7D8D86]' : 'bg-gray-200',
                    'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-[#BCA88D] focus:ring-offset-2'
                )}
            >
                <span
                    aria-hidden="true"
                    className={classNames(
                        item.enabled ? 'translate-x-5' : 'translate-x-0',
                        'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out'
                    )}
                />
            </Switch>
        
    </div>
  )
}
