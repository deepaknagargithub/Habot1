import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="w-full h-60 bg-blue-950 flex justify-center items-center">
      <div className="w-5/6 h-5/6 border-t border-b border-gray-600 border-b-2 flex justify-between">
        <div className="flex items-center justify-center">
          <img
            className="w-40 h-8 bg-white"
            src="https://s3-alpha-sig.figma.com/img/c1e1/45c4/467f6c3f60c323a607803f6d0dbc78cd?Expires=1731283200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aVCWBXTsB5HAJspOV~0tqh6hIA5xvZjbjk3kSgRO8t7ChPrBUWmwXyMrwSHBZDVDxV8LjWKwWkihj0~PWyHkw~EnCnqh31iNGWS3LkOBDlWG0V4t9JH88j6BC~xyGdMcQiQpd1OApObe6N89ugLlx~8jZ0-8Fr~IKmYQBr5vm1yRujtOaBzuxAHKeG57x3IQUYFSoaNh8JymJgOaELN8VN2PNosiDPo-D51yBdzl-L64Gv~ZgJf-UnJ0gSoUJ5L1yrOiI3NpLBMLosdU0B73WVE0ngfqGiKQXnexGQMVIw~9bJ~N9DCOkZZyUi5d30Ev61A30n7BvpPF1BNrmqu0-Q__"
            alt=""
          />
          <div className="flex gap-x-10 ml-5">
            <ul className="text-white font-medium">
              Company
              <li className="font-normal text-gray-700">About</li>
              <li className="font-normal text-gray-700">FAQ</li>
            </ul>
            <ul className="text-white font-medium">
              Terms
              <li className="font-normal text-gray-700">Data Privacy</li>
              <li className="font-normal text-gray-700">Terms</li>
              <li className="font-normal text-gray-700">Accessibility</li>
            </ul>
            <ul className="text-white font-medium">
              Related
              <li className="font-normal text-gray-700">Find Buyer</li>
              <li className="font-normal text-gray-700">Feedback</li>
            </ul>
          </div>
        </div>

        <div className="w-1/6 flex items-center">
          <div className="flex gap-x-2">
            <FaLinkedin className="w-10 h-10 text-white" />
            <FaTwitter className="w-10 h-10 text-white" />
            <CiFacebook className="w-10 h-10 text-white" />
            <FaInstagram className="w-10 h-10 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
