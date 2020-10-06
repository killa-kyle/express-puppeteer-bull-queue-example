require("dotenv").config()
import { sendEmail } from "./src/notification/email"

console.log(process.env.EMAIL_USERNAME)
const opts = {
  subject: "Testing Email!",
  text: `<h1>Lorem ipsum dolor sit amet</h1>, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas. Nulla aliquet enim tortor at. Mollis aliquam ut porttitor leo a diam. Mattis vulputate enim nulla aliquet porttitor lacus. Diam in arcu cursus euismod quis. Nisl suscipit adipiscing bibendum est ultricies integer quis auctor elit. Nunc eget lorem dolor sed viverra ipsum. Integer vitae justo eget magna fermentum iaculis. Leo vel orci porta non pulvinar neque laoreet suspendisse interdum. Sem et tortor consequat id porta. A erat nam at lectus. Phasellus vestibulum lorem sed risus ultricies tristique nulla aliquet. Ornare massa eget egestas purus viverra accumsan. Vitae ultricies leo integer malesuada nunc vel. Mi bibendum neque egestas congue quisque egestas diam in. Eget est lorem ipsum dolor. Ultricies leo integer malesuada nunc vel. Convallis posuere morbi leo urna molestie at elementum.

  Augue interdum velit euismod in pellentesque massa placerat duis ultricies. Tempus imperdiet nulla malesuada pellentesque. Euismod nisi porta lorem mollis. Bibendum ut tristique et egestas quis ipsum. At consectetur lorem donec massa sapien faucibus et molestie. Pretium lectus quam id leo in vitae turpis massa sed. Neque gravida in fermentum et sollicitudin ac. Interdum velit euismod in pellentesque massa placerat duis ultricies. Volutpat ac tincidunt vitae semper quis. Quam id leo in vitae. Dolor purus non enim praesent elementum.

  Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Nec tincidunt praesent semper feugiat nibh sed. Fringilla ut morbi tincidunt augue interdum velit euismod in pellentesque. Ultrices mi tempus imperdiet nulla malesuada. Eu feugiat pretium nibh ipsum consequat nisl vel pretium lectus. Aliquam malesuada bibendum arcu vitae elementum curabitur vitae nunc sed. Viverra mauris in aliquam sem. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et netus. Amet venenatis urna cursus eget nunc scelerisque viverra mauris. Et malesuada fames ac turpis egestas. Eget velit aliquet sagittis id consectetur purus ut faucibus. Tellus in hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Arcu ac tortor dignissim convallis aenean et tortor at risus. Pretium lectus quam id leo. Enim nulla aliquet porttitor lacus. Elementum facilisis leo vel fringilla est. Adipiscing commodo elit at imperdiet dui. Vel eros donec ac odio tempor.

  Eget arcu dictum varius duis at consectetur lorem donec. Lacus vel facilisis volutpat est velit. Nibh praesent tristique magna sit amet purus gravida. Eu tincidunt tortor aliquam nulla facilisi cras fermentum odio eu. Pulvinar mattis nunc sed blandit libero volutpat sed cras. Egestas dui id ornare arcu. Id aliquet lectus proin nibh nisl condimentum id venenatis. Diam in arcu cursus euismod. Arcu non sodales neque sodales. Est lorem ipsum dolor sit amet consectetur adipiscing. Odio aenean sed adipiscing diam. Dictum sit amet justo donec enim diam vulputate ut. Habitasse platea dictumst quisque sagittis purus sit amet.

  Habitant morbi tristique senectus et. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Urna cursus eget nunc scelerisque. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor. Sit amet consectetur adipiscing elit pellentesque habitant morbi. Sodales neque sodales ut etiam sit. At erat pellentesque adipiscing commodo. Nunc congue nisi vitae suscipit tellus mauris a diam. Dolor sit amet consectetur adipiscing elit pellentesque habitant. Ullamcorper velit sed ullamcorper morbi tincidunt. Vulputate mi sit amet mauris. Tortor at auctor urna nunc id cursus metus aliquam eleifend. Id nibh tortor id aliquet lectus proin nibh. Amet consectetur adipiscing elit duis. Dui faucibus in ornare quam viverra orci. Aliquam etiam erat velit scelerisque in dictum non consectetur. Luctus accumsan tortor posuere ac ut consequat semper. Suspendisse faucibus interdum posuere lorem.`  
}
sendEmail(opts)