export default function Footer() {
  return (
    <footer>
      <div>
        <span>WCoders</span>
        <ul id="contacts" className="mt-[5px]">
          <li id="contact-phone" className="flex gap-[5px] items-center">
            <img className="w-[20px] h-[20px]" src="/icons/phone.png" alt="" />
            <span className="text-[14px] md:text-[16px]">(123) 123-4651</span>
          </li>
          <li id="contact-email" className="flex gap-[5px] items-center">
            <img className="w-[20px] h-[20px]" src="/icons/email.png" alt="" />
            <span className="text-[14px] md:text-[16px]">
              example@gmail.com
            </span>
          </li>
        </ul>
        <ul id="socials">
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
          <li>
            <a href="">
              <img src="" alt="" />
            </a>
          </li>
        </ul>
      </div>
      <form action="">
        <button type="submit">
          Get A Quote <img src="" alt="" />
        </button>
      </form>
    </footer>
  );
}
