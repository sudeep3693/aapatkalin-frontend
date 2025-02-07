import { useEffect} from "react";
import EngRecords from "../Resources/English/translation.json";
import NepRecords from "../Resources/Nepali/translation.json";

function FetchRecords({ lang, setdatabylang }) {
 

  useEffect(() => {
    if (lang) {
      setdatabylang(EngRecords);
    } else {
      setdatabylang(NepRecords);
    }
  }, [lang]);


  return null;
}

export default FetchRecords;
