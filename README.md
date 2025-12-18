# Desafio Pizzeria Mamma Mia - Desafio Latam.

# Hito 1
Se completó el primer hito de landing para Pizzeria Mamma Mia.
Opté por no usar el objeto "props" para pasar propiedades de padre a hijo y preferí ser más específico con ello.

# Hito 2
Se completó el segundo hito del sitio web para Pizzeria Mamma Mia.
Se incorporan páginas de registro y login, con validación de usuario y contraseña -en duro-

# Hito 3
Se completó el tercer hito del sitio web para Pizzeria Mamma Mia.
Se crea la página de carrito, que permite sumar diferentes cantidades de pizzas y calcula el valor total del carrito. En caso de que un item del carrito sea "0", se elimina del carrito.

# Hito 4
Se completó el cuarto hito del sitio web para Pizzeria Mamma Mia.
Se crea la pagina Pizza.jsx para visualizar el detalle de una pizza - esta pantalla se encuentra fija en el commit para su visualización. La informacion es obtenida desde una API en http://localhost:5000/api/pizzas que debe ser iniciada desde la terminal con la información otorgada en el desafio.

# Hito 5
Se completó el quinto hito del sitio web para Pizzeria Mamma Mia.
Se implementa React Router para navegación entre páginas sin recargar el navegador. Se crean las rutas: / (Home), /register, /login, /cart, /pizza/p001, /profile y /404. Se agregan las páginas Profile y NotFound (404). El Navbar ahora usa componentes Link en lugar de botones para navegar entre las diferentes secciones del sitio.

# Hito 6
Se completó el sexto hito del sitio web para Pizzeria Mamma Mia.
Se implementa Context API para manejar carrito de compras. Ahora el carrito es accesible desde cualquier componente de la aplicación. El Navbar muestra el total del carrito en tiempo real, las tarjetas de pizza en Home permiten agregar productos al carrito, y la página Cart consume el contexto para mostrar, modificar y calcular el total de la compra.

# Hito 7
Se completó el séptimo hito del sitio web para Pizzeria Mamma Mia.
Se implementa useParams para obtener el ID de la pizza desde la URL y mostrar su detalle dinámicamente. Se crea UserContext para manejar la autenticación simulada con un token booleano y función logout. Se implementan rutas protegidas: /profile solo es accesible si el usuario está autenticado (token true), mientras que /login y /register solo son accesibles si no está autenticado (token false). El botón de pagar en el carrito se deshabilita cuando el token es false.

