import { cn } from '@/lib/utils';
import { buttonVariants } from './ui/button';

function Footer() {
  return (
    <footer className='flex border-t'>
      <div className='container flex items-center justify-between py-2'>
        <span className='align-middle'>
          CRUD app built with React/Next.js + shadcn-ui on the frontend and
          Strapi on the backend.
        </span>
        <a
          href='https://github.com/mostafaei2002'
          className={cn(
            buttonVariants({
              variant: 'secondary',
              size: 'sm',
            }),
          )}
        >
          My Github
        </a>
      </div>
    </footer>
  );
}

export default Footer;
