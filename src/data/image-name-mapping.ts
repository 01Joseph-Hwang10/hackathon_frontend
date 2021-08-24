

export const imageNameMapping: Record<string, string> = {
    q1: '/image/img_snow_window.png',
    q2: '/image/img_sky.png',
    home: '/image/img_sky.png',
    q3: '/image/img_airport.png',
    q4: '/image/img_ticket_booth.png',
    q5: '/image/img_hut.png',
    q6: '/image/img_rain.png',
    q7: '/image/img_dinner.png',
    q8: '/image/img_cafe.png',
    q9: '/image/img_menu.png',
    s1: '/image/img_calendar.png',
    s2: '/image/img_plane_sun.png',
    s3: '/image/img_fairytale.png',
    s4: '/image/img_rainbow.png',
    s5: '/image/img_architecture.png',
    logo1: '/icons/ic_tb_logo_letter_white.png'
}

export const doubleSizeImage = (uri: string): string => {
    const [filename, ext] = uri.split('.')
    return `${filename}@2x.${ext}`;
}