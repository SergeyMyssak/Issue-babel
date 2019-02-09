enum PinStatus {
  New = 'new',
  Confirm = 'confirm',
  Unlock = 'unlock',
  Edit = 'edit',
}

interface IPinCodeParams {
  status: PinStatus;
  onComplete: () => void;
  onClose?: () => void;
  originalCode?: string;
}

export { PinStatus, IPinCodeParams };
