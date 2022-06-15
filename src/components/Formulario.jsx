import {FormControl, InputLabel, Select, MenuItem, Grid} from '@mui/material';
import useNoticias from '../hooks/useNoticias';

const CATEGORIAS = [
    { value: 'general', label: 'General'},
    { value: 'business', label: 'Negocios'},
    { value: 'entertainment', label: 'Entretenimiento'},
    { value: 'health', label: 'Salud'},
    { value: 'science', label: 'Ciencia'},
    { value: 'sports', label: 'Deportes'},
    { value: 'technology', label: 'Tecnología'},
]

const PAIS = [
    { value: 'ae', label: 'Emiratos Árabes Unidos'},
    { value: 'ar', label: 'Argentina'},
    { value: 'at', label: 'Austria'},
    { value: 'au', label: 'Australia'},
    { value: 'be', label: 'Bélgica'},
    { value: 'bg', label: 'Bulgaria'},
    { value: 'br', label: 'Brasil'},
    { value: 'ca', label: 'Canada'},
    { value: 'ch', label: 'Suiza'},
    { value: 'cn', label: 'China'},
    { value: 'co', label: 'Colombia'},
    { value: 'cu', label: 'Cuba'},
    { value: 'cz', label: 'República Checa'},
    { value: 'de', label: 'Alemania'},
    { value: 'eg', label: 'Egipto'},
    { value: 'fr', label: 'Francia'},
    { value: 'gb', label: 'Reino Unido'},
    { value: 'gr', label: 'Grecia'},
    { value: 'hk', label: 'Hong Kong'},
    { value: 'hu', label: 'Hungría'},
    { value: 'id', label: 'Indonesia'},
    { value: 'ie', label: 'Irlanda'},
    { value: 'il', label: 'Israel'},
    { value: 'it', label: 'Italia'},
    { value: 'jp', label: 'Japon'},
    { value: 'kr', label: 'Corea del Sur'},
    { value: 'lt', label: 'Lituania'},
    { value: 'lv', label: 'Letonia'},
    { value: 'ma', label: 'Marrocos'},
    { value: 'mx', label: 'México'},
    { value: 'my', label: 'Malasia'},
    { value: 'ng', label: 'Nigeria'},
    { value: 'nl', label: 'Países Bajos'},
    { value: 'no', label: 'Noruega'},
    { value: 'nz', label: 'Nueva Zelanda'},
    { value: 'ph', label: 'Filipinas'},
    { value: 'pl', label: 'Polonia'},
    { value: 'pt', label: 'Portugal'},
    { value: 'ro', label: 'Rumania'},
    { value: 'rs', label: 'Serbia'},
    { value: 'ru', label: 'Rusia'},
    { value: 'sa', label: 'Arabia Saudí'},
    { value: 'se', label: 'Suecia'},
    { value: 'sg', label: 'Singapur'},
    { value: 'si', label: 'Eslovenia'},
    { value: 'sk', label: 'Eslovaquia'},
    { value: 'th', label: 'Tailandia'},
    { value: 'tr', label: 'Turquía'},
    { value: 'tw', label: 'Taiwán'},
    { value: 'ua', label: 'Ucrania'},
    { value: 'us', label: 'Estados Unidos'},
    { value: 've', label: 'Venezuela'},
    { value: 'za', label: 'Sudáfrica'},
]


const Formulario = () => {
    
    const {categoria, handleChangeCategoria, pais, handleChangePais} = useNoticias();
  return (
    <form>
            <FormControl fullWidth sx={{marginBottom:'20px'}}>
            <InputLabel>Categoría</InputLabel>
            <Select
                label="Categoria"
                onChange={handleChangeCategoria}
                value={categoria}
            >
                {CATEGORIAS.map(categoria => (
                    <MenuItem key={categoria.value} value={categoria.value}>
                    {categoria.label}
                    </MenuItem>))}
            </Select>          
                  
        </FormControl>    
        <FormControl fullWidth>
            <InputLabel>País</InputLabel>
                <Select
                    label="Pais"
                    onChange={handleChangePais}
                    value={pais}
                >
                    {PAIS.map(pais => (
                        <MenuItem key={pais.value} value={pais.value}>
                        {pais.label}
                        </MenuItem>))}
                </Select>  
        </FormControl>
    </form>
  )
}

export default Formulario