import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type NextRequest, NextResponse } from 'next/server'

export const dynamic = 'force-dynamic'

// Esto ews una opcion de Next.js para evvitar que cache de forma estatica la ruta y siempre se eejecute ene l servidror.
export async function GET(request: NextRequest) {
    console.log(request.url)
    const requestUrl = new URL(request.url)
    const code = requestUrl.searchParams.get('code')

    if (code !== null) {
        const supabase = createRouteHandlerClient({ cookies })
        await supabase.auth.exchangeCodeForSession(code)
        // usando el código que le hemos pasado por la URL nos devuelbe la sesión del usuario
    }

    return NextResponse.redirect(requestUrl.origin)
}
