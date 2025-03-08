import React, { useState } from "react";

const SelectCurrency = ({ onCountryChange = () => {} }) => {
  const [selectedCurrency, setSelectedCurrency] = useState("Select");

  const currencies = [
    { name: "Select Currency", symbol: "Select Currency " },
    { name: "UAE Dirham", symbol: "AED" },
    { name: "Albanian Lek", symbol: "ALL" },
    { name: "Neth Antilles Guilder", symbol: "NAƒ" },
    { name: "Argentine Peso", symbol: "$" },
    { name: "Australian Dollar", symbol: "$" },
    { name: "Aruba Florin", symbol: "ƒ" },
    { name: "Barbados Dollar", symbol: "BBD" },
    { name: "Bangladesh Taka", symbol: "Tk" },
    { name: "Bulgarian Lev", symbol: "лв" },
    { name: "Bahraini Dinar", symbol: "BHD" },
    { name: "Burundi Franc", symbol: "FBu" },
    { name: "Bermuda Dollar", symbol: "BD$" },
    { name: "Brunei Dollar", symbol: "B$" },
    { name: "Bolivian Boliviano", symbol: "Bs" },
    { name: "Brazilian Real", symbol: "R$" },
    { name: "Bahamian Dollar", symbol: "B$" },
    { name: "Bhutan Ngultrum", symbol: "Nu" },
    { name: "Botswana Pula", symbol: "P" },
    { name: "Belarus Ruble", symbol: "Br" },
    { name: "Belize Dollar", symbol: "BZ$" },
    { name: "Canadian Dollar", symbol: "C$" },
    { name: "Swiss Franc", symbol: "CHF" },
    { name: "Chilean Peso", symbol: "$" },
    { name: "Chinese Yuan", symbol: "¥" },
    { name: "Colombian Peso", symbol: "$" },
    { name: "Costa Rica Colon", symbol: "₡" },
    { name: "Cuban Peso", symbol: "$MN" },
    { name: "Cape Verde Escudo", symbol: "Esc" },
    { name: "Czech Koruna", symbol: "Kč" },
    { name: "Djibouti Franc", symbol: "Fdj" },
    { name: "Danish Krone", symbol: "kr" },
    { name: "Dominican Peso", symbol: "RD$" },
    { name: "Algerian Dinar", symbol: "دج" },
    { name: "Estonian Kroon", symbol: "EEK" },
    { name: "Egyptian Pound", symbol: "EGP" },
    { name: "Ethiopian Birr", symbol: "Br" },
    { name: "Euro", symbol: "€" },
    { name: "Fiji Dollar", symbol: "FJ$" },
    { name: "Falkland Islands Pound", symbol: "£" },
    { name: "British Pound", symbol: "£" },
    { name: "Ghanaian Cedi", symbol: "GHS" },
    { name: "Gambian Dalasi", symbol: "D" },
    { name: "Guinea Franc", symbol: "FG" },
    { name: "Guatemala Quetzal", symbol: "Q" },
    { name: "Guyana Dollar", symbol: "GY$" },
    { name: "Hong Kong Dollar", symbol: "HK$" },
    { name: "Honduras Lempira", symbol: "L" },
    { name: "Croatian Kuna", symbol: "kn" },
    { name: "Hungarian Forint", symbol: "Ft" },
    { name: "Indonesian Rupiah", symbol: "Rp" },
    { name: "Israeli Shekel", symbol: "₪" },
    { name: "Indian Rupee", symbol: "Rs" },
    { name: "Iraqi Dinar", symbol: "IQD" },
    { name: "Iceland Krona", symbol: "kr" },
    { name: "Jordanian Dinar", symbol: "JOD" },
    { name: "Japanese Yen", symbol: "¥" },
    { name: "Kenyan Shilling", symbol: "KSh" },
    { name: "Kyrgyzstan Som", symbol: "KGS" },
    { name: "Cambodia Riel", symbol: "KHR" },
    { name: "Comoros Franc", symbol: "KMF" },
    { name: "North Korean Won", symbol: "₩" },
    { name: "Korean Won", symbol: "₩" },
    { name: "Kuwaiti Dinar", symbol: "KWD" },
    { name: "Cayman Islands Dollar", symbol: "$" },
    { name: "Kazakhstan Tenge", symbol: "KZT" },
    { name: "Sri Lanka Rupee", symbol: "ரூ" },
    { name: "Moroccan Dirham", symbol: "MAD" },
    { name: "Moldovan Leu", symbol: "MDL" },
    { name: "Macedonian Denar", symbol: "MKD" },
    { name: "Myanmar Kyat", symbol: "K" },
    { name: "Mongolian Tugrik", symbol: "₮" },
    { name: "Macau Pataca", symbol: "$" },
    { name: "Mauritania Ougulya", symbol: "UM" },
    { name: "Mauritius Rupee", symbol: "₨" },
    { name: "Maldives Rufiyaa", symbol: "Rf" },
    { name: "Malawi Kwacha", symbol: "MK" },
    { name: "Mexican Peso", symbol: "$" },
    { name: "Malaysian Ringgit", symbol: "RM" },
    { name: "Namibian Dollar", symbol: "N$" },
    { name: "Nigerian Naira", symbol: "₦" },
    { name: "Nicaragua Cordoba", symbol: "C$" },
    { name: "Norwegian Krone", symbol: "kr" },
    { name: "Nepalese Rupee", symbol: "₨" },
    { name: "New Zealand Dollar", symbol: "$" },
    { name: "Omani Rial", symbol: "OMR" },
    { name: "Panama Balboa", symbol: "B" },
    { name: "Peruvian Nuevo Sol", symbol: "PEN" },
    { name: "Papua New Guinea Kina", symbol: "K" },
    { name: "Philippine Peso", symbol: "₱" },
    { name: "Pakistani Rupee", symbol: "Rs" },
    { name: "Polish Zloty", symbol: "zł" },
    { name: "Qatar Rial", symbol: "QAR" },
    { name: "Romanian New Leu", symbol: "L" },
    { name: "Russian Rouble", symbol: "руб" },
    { name: "Rwanda Franc", symbol: "RF" },
    { name: "Saudi Arabian Riyal", symbol: "SAR" },
    { name: "Solomon Islands Dollar", symbol: "SI$" },
    { name: "Seychelles Rupee", symbol: "SR" },
    { name: "Sudanese Pound", symbol: "SDG" },
    { name: "Swedish Krona", symbol: "kr" },
    { name: "Singapore Dollar", symbol: "S$" },
    { name: "St Helena Pound", symbol: "£" },
    { name: "Slovak Koruna", symbol: "Sk" },
    { name: "Sierra Leone Leone", symbol: "Le" },
    { name: "Somali Shilling", symbol: "So" },
    { name: "Sao Tome Dobra", symbol: "Db" },
    { name: "El Salvador Colon", symbol: "₡" },
    { name: "Syrian Pound", symbol: "SYP" },
    { name: "Swaziland Lilageni", symbol: "SZL" },
    { name: "Thai Baht", symbol: "฿" },
    { name: "Tunisian Dinar", symbol: "TND" },
    { name: "Tonga Paang", symbol: "T$" },
    { name: "Turkish Lira", symbol: "YTL" },
    { name: "Trinidad Tobago Dollar", symbol: "TTD" },
    { name: "Taiwan Dollar", symbol: "NT$" },
    { name: "Tanzanian Shilling", symbol: "x" },
    { name: "Ugandan Shilling", symbol: "USh" },
    { name: "United States Dollar", symbol: "$" },
    { name: "Uruguayan New Peso", symbol: "UYU" },
    { name: "Uzbekistan Sum", symbol: "UZS" },
    { name: "Venezuelan Bolivar", symbol: "VEF" },
    { name: "Vietnam Dong", symbol: "₫" },
    { name: "Vanuatu Vatu", symbol: "Vt" },
    { name: "Samoa Tala", symbol: "WS$" },
    { name: "CFA Franc (BEAC)", symbol: "BEAC" },
    { name: "East Caribbean Dollar", symbol: "EC$" },
    { name: "CFA Franc (BCEAO)", symbol: "BCEAO" },
    { name: "Pacific Franc", symbol: "F" },
    { name: "Yemen Riyal", symbol: "YER" },
    { name: "South African Rand", symbol: "R" },
    { name: "Zambian Kwacha", symbol: "ZMK" }
  ];

  const handleChange = (event) => {
    const currency = currencies.find(
      (currency) => currency.symbol === event.target.value
    );
    if (currency) {
      setSelectedCurrency(currency.symbol);
      onCountryChange(currency);
    }
  };

  return (
    <div>
      <select
        className="p-1.5 rounded-xl text-[#12153d] font-light border border-gray-50 outline-none flex-grow appearance-none bg-no-repeat"
        id="country-select"
        value={selectedCurrency}
        onChange={handleChange}
        style={{
          backgroundColor: "#E5590F",
          textAlign: "center",
          backgroundImage: "none",
          width: "160px",
        }}
      >
        {currencies.map((currency) => (
          <option
            className="rounded-lg text-gray-500 font-light bg-white text-center text-sm"
            key={`${currency.name}-${currency.symbol}`}
            value={`${currency.symbol}`}
          >
            {currency.symbol}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCurrency;