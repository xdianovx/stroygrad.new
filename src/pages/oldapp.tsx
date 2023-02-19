import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'

import localFont from '@next/font/local'
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { ThemeProvider } from 'next-themes'
import 'normalize.css'
import { useRef } from 'react'
import { LocomotiveScrollProvider as RLSProvider } from 'react-locomotive-scroll'

import '../styles/globals.scss'

const graphic = localFont({
	src: [
		{
			path: '../assets/fonts/GraphikLCG-Thin.woff2',
			weight: '100',
			style: 'normal',
		},
		{
			path: '../assets/fonts/GraphikLCG-Extralight.woff2',
			weight: '200',
			style: 'normal',
		},
		{
			path: '../assets/fonts/GraphikLCG-Light.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: '../assets/fonts/GraphikLCG-Regular.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../assets/fonts/GraphikLCG-Medium.woff2',
			weight: '500',
			style: 'normal',
		},
		{
			path: '../assets/fonts/GraphikLCG-Semibold.woff2',
			weight: '600',
			style: 'normal',
		},
		{
			path: '../assets/fonts/GraphikLCG-Bold.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: '../assets/fonts/GraphikLCG-Black.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: '../assets/fonts/GraphikLCG-Super.woff2',
			weight: '900',
			style: 'normal',
		},
	],
})

export default function App({ Component, pageProps }: AppProps) {
	const { asPath } = useRouter()
	const containerRef = useRef(null)

	return (
		<>
			<style jsx global>{`
				html {
					font-family: ${graphic.style.fontFamily};
				}
			`}</style>
			<RLSProvider
				options={{
					smooth: true,
				}}
				watch={
					[
						//..all the dependencies you want to watch to update the scroll.
						//  Basicaly, you would want to watch page/location changes
						//  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
					]
				}
				location={asPath}
				onLocationChange={(scroll: any) =>
					scroll.scrollTo(0, { duration: 0, disableLerp: true })
				}
				containerRef={containerRef}
			>
				<main data-scroll-container ref={containerRef}>
					<Component {...pageProps} />
				</main>
			</RLSProvider>
		</>
	)
}
