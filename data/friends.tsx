export const Friends: Friend[] = [
  {
    title: '愧怍',
    description: '道阻且长，行则将至',
    website: 'https://kuizuo.cn/',
    avatar: '/img/friend/kuizuo.png',
  },
  {
    title: 'Shake',
    description: '世界继续热闹，愿你不变模样，勇敢且自由😃',
    website: 'https://www.shaking.site',
    avatar: '/img/friend/shake.png',
  },
  {
    title: "Power's Wiki",
    description: '博览万物，融会贯通。',
    website: 'https://wiki-power.com/',
    avatar: '/img/friend/power-lin.png',
  },
]

export type Friend = {
  title: string
  description: string
  website: string
  avatar?: string
}
