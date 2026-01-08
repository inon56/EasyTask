import { CommonModule } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Product = { name: string; price: number };

@Component({
  selector: 'app-school3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './school3.component.html',
  styleUrl: './school3.component.scss',
})

export class School3Component {
  items6 = signal<Product[]>([
    { name: 'Angular', price: 0 },
    { name: 'React', price: 0 },
    { name: 'Vue', price: 0 },
    { name: 'Svelte', price: 0 },
    { name: 'Solid', price: 0 },
    { name: 'Lit', price: 0 }
  ]);

  query = signal('');
  sortKey = signal<'name' | 'price'>('name');
  sortDir = signal<1 | -1>(1); // 1 asc, -1 desc

  view = computed(() => {
    const q = this.query().toLowerCase();
    const dir = this.sortDir();
    const key = this.sortKey();
    return this.items6()
      .filter(it => it.name.toLowerCase().includes(q))
      .sort((a, b) => {
        const av: any = (a as any)[key];
        const bv: any = (b as any)[key];
        return av < bv ? -1 * dir : av > bv ? 1 * dir : 0;
      });
  });

  setSort(key: 'name' | 'price') {
    debugger;
    if (this.sortKey() === key) {
      this.toggleDir();
    } else {
      this.sortKey.set(key);
    }
  }

  toggleDir() {
    this.sortDir.set(this.sortDir() === 1 ? -1 : 1);
  }
  
  items5 = signal(['Angular', 'React', 'Vue']);
  addList() {
    this.items5.update((arr) => [...arr, 'Svelte']);
  }
  clearList() {
    this.items5.set([]);
  }
  resetList() {
    this.items5.set(['Angular', 'React', 'Vue']);
  }

  shuffle() {    
    this.items5.update(arr => {
      const copy = [...arr];
      for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
      }
      return copy;
    });
  }

  showSignal = signal(true);

  immediate = '';
  debounced = '';
  private handle: any;

  onInputDebounced(e: Event) {
    const v = (e.target as HTMLInputElement)?.value ?? '';
    this.immediate = v;
    clearTimeout(this.handle);
    this.handle = setTimeout(() => (this.debounced = v), 400);
  }

  draft = '';
  lastKey4 = '';
  items4 = ['Buy milk', 'Learn Angular'];

  add() {
    const v = (this.draft || '').trim();
    if (!v) return;
    this.items4 = [...this.items4, v];
    this.draft = '';
  }

  clear() {
    this.items4 = [];
  }

  count2 = 0;
  value2 = '';
  lastKey2 = '';

  increment() {
    this.count2++;
  }
  onInput(e: Event) {
    console.log(e);
    console.log(e.target);
    this.value2 = (e.target as HTMLInputElement).value;
  }

  show = true;
  get items2() {
    return this.show ? ['Angular', 'Components', 'Directives'] : [];
  }
  toggle4() {
    this.show = !this.show;
  }

  name3 = 'Angular';
  favorite3 = 'Angular';

  today = new Date();
  name = 'Ada Lovelace';
  ratio = 0.756;

  type = 'info';
  msg = 'Hello';

  count = 0;
  text = '';

  ngOnInit(): void {
    console.log('School3Component initialized');
  }

  wide = true;
  label = 'Toggle label';
  toggle3() {
    this.wide = !this.wide;
    this.label = this.wide ? 'Collapse' : 'Expand';
  }

  setText() {
    this.text = 'World';
  }

  user2: { name: string } | null = { name: 'Ada' };
  toggle2() {
    this.user2 = this.user2 ? null : { name: 'Ada' };
  }

  current = '';
  read(val: string) {
    this.current = val ?? '';
    console.log(this.current);
  }

  user: { profile?: { email?: string } } | undefined = undefined;
  toggle() {
    this.user = this.user
      ? undefined
      : { profile: { email: 'easytask@example.com' } };
  }

  ok = true;
  items = ['A', 'B', 'C'];
}
