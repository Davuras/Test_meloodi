export const config = {
  matcher: '/:path*',
};

export default function middleware(request) {
  const auth = request.headers.get('authorization');

  if (auth) {
    const authValue = auth.split(' ')[1];
    const [user, pwd] = atob(authValue).split(':');

    if (user === 'SamirXP' && pwd === 'Dijar2015!') {
      return; // Zugriff erlaubt
    }
  }

  return new Response('Passwort erforderlich', {
    status: 401,
    headers: {
      'WWW-Authenticate': 'Basic realm="Secure Area"',
    },
  });
}
