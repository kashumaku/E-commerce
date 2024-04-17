import yenepay from '../assets/img/yenepay.png'
import chapa from '../assets/img/chapa.png'
import paypal from '../assets/img/paypal.png'
import mastercard from '../assets/img/mastercard.png'
const Footer = () => {
    return (
        <div className="bg-[#0a141e] text-gray-400 ">
            <div className="flex justify-between items-center p-4 bg-gray-900">
                <ul className="flex flex-1 gap-4">
                    <li><img src={yenepay} width={100} alt="" /></li>
                    <li><img src={chapa} width={100} alt="" /></li>
                    <li><img src={paypal} width={100} alt="" /></li>
                    <li><img src={mastercard} width={100} alt="" /></li>
                </ul>
                <div className="flex-1">
                    Dhl
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quas maxime dolorum nostrum temporibus ratione placeat praesentium vitae, quisquam quidem rem sequi sit. Voluptatum dolores ad esse mollitia, voluptate excepturi!</p>
                </div>
            </div >
            <div className="flex justify-between p-4">
                <div className="flex flex-col gap-4 mt-4 flex-1">
                    <h1 className="font-bold text-2xl">FAQ</h1>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda repellendus sapiente adipisci ?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. tempore iusto tempora, beatae alias unde adipisci sequi voluptas quidem odit?</p>
                </div>
                <div className="flex flex-col gap-2 flex-1 mt-4">
                    <h1>Useful links</h1>
                    <a href="" className="text-indigo-500 cursor-pointer ">Home</a>
                    <a href="" className="text-indigo-500 cursor-pointer ">Products</a>
                    <a href="" className="text-indigo-500 cursor-pointer ">contact us</a>
                    <a href="" className="text-indigo-500 cursor-pointer ">Blogs</a>
                    <a href="" className="text-indigo-500 cursor-pointer ">Top rated products</a>
                </div>
                <div className="flex-1">
                    <ul className="flex justify-between">
                        <li>Facebook</li>
                        <li>Instagram</li>
                        <li>Tiktok</li>
                        <li>Telegram</li>
                    </ul>
                    <div className="mt-2">
                        <h1 className="font-bold text-3xl">Subscribe</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum vel ad illo ab fuga, iure aliquid nesciunt optio reprehenderit hic in similique? </p>
                        <span className="bg-white flex w-full my-6">
                            <input type="text" placeholder="Your email" className="w-full px-2 text-black outline-none" />
                            <button className="bg-blue-500 text-white p-2">Subscribe</button>
                        </span>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;