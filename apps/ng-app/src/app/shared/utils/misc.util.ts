import { Subject } from 'rxjs';

/**
 * Finishes a given subject which is used to determine the survival of observable streams.
 */
export const unsubscribe = (subject: Subject<unknown>) => {
  subject.next();
  subject.complete();
};
