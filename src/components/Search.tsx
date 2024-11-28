import { useFormik } from 'formik';
import * as Yup from 'yup';
import SearchInput from './SearchInput';
import SearchBtn from './SearchBtn';
import styles from './styles/Search.module.css';

interface SearchProps {
  onSearch: (searchValue: string) => Promise<void>;
}

const validationSchema = Yup.object({
  searchValue: Yup.string()
    .required('City name is required')
    .min(2, 'City name must be at least 2 characters'),
});

function Search({ onSearch }: SearchProps) {
  const formik = useFormik({
    initialValues: {
      searchValue: '',
    },
    validationSchema,
    onSubmit: async (values) => {
      await onSearch(values.searchValue);
      formik.resetForm();
    },
  });

  return (
    <div className={styles.wrapper}>
      <form onSubmit={formik.handleSubmit} className={styles.search}>
        <SearchInput
          name="searchValue"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.searchValue}
          placeholder="Enter city name"
        />
        <SearchBtn
          type="submit"
          disabled={!formik.isValid || formik.isSubmitting}
        />
      </form>
      {formik.touched.searchValue && formik.errors.searchValue ? (
        <div className={styles.error}>{formik.errors.searchValue}</div>
      ) : null}
    </div>
  );
}

export default Search;
