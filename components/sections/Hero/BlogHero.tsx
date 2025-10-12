import React from 'react'

const BlogHero = () => {
	return (
		<div className='relative h-[300px] md:h-[400px] lg:h-[500px] w-full flex items-center justify-center border-b-2'>
			<h1 className='text-5xl text-neutral-900 font-bold uppercase text-'>Our <span className="text-gradient bg-gradient-to-br from-purple-800 to-purple-400">Blog</span> </h1>

		</div>
	)
}

export default BlogHero